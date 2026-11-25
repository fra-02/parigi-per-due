import { TicketAttachment } from '../types/travel';

const DB_NAME = 'paris_a_deux_db';
const DB_VERSION = 1;
const STORE_ATTACHMENTS = 'attachments';

function openDb(): Promise<IDBDatabase> {
  return new Promise((resolve, reject) => {
    const req = indexedDB.open(DB_NAME, DB_VERSION);
    req.onupgradeneeded = () => {
      const db = req.result;
      if (!db.objectStoreNames.contains(STORE_ATTACHMENTS)) {
        db.createObjectStore(STORE_ATTACHMENTS, { keyPath: 'id' });
      }
    };
    req.onsuccess = () => resolve(req.result);
    req.onerror = () => reject(req.error);
  });
}

export async function saveAttachment(att: TicketAttachment): Promise<void> {
  const db = await openDb();
  return new Promise((resolve, reject) => {
    const tx = db.transaction(STORE_ATTACHMENTS, 'readwrite');
    tx.objectStore(STORE_ATTACHMENTS).put(att);
    tx.oncomplete = () => resolve();
    tx.onerror = () => reject(tx.error);
  });
}

export async function getAllAttachments(): Promise<TicketAttachment[]> {
  try {
    const db = await openDb();
    return await new Promise((resolve, reject) => {
      const tx = db.transaction(STORE_ATTACHMENTS, 'readonly');
      const req = tx.objectStore(STORE_ATTACHMENTS).getAll();
      req.onsuccess = () => resolve((req.result as TicketAttachment[]) ?? []);
      req.onerror = () => reject(req.error);
    });
  } catch {
    return [];
  }
}

export async function deleteAttachment(id: string): Promise<void> {
  const db = await openDb();
  return new Promise((resolve, reject) => {
    const tx = db.transaction(STORE_ATTACHMENTS, 'readwrite');
    tx.objectStore(STORE_ATTACHMENTS).delete(id);
    tx.oncomplete = () => resolve();
    tx.onerror = () => reject(tx.error);
  });
}

export async function checkStorageQuota(): Promise<{
  supported: boolean;
  usageMb: number;
  quotaMb: number;
  lowSpace: boolean;
}> {
  if (!navigator.storage || !navigator.storage.estimate) {
    return { supported: false, usageMb: 0, quotaMb: 0, lowSpace: false };
  }
  try {
    const est = await navigator.storage.estimate();
    const usage = est.usage ?? 0;
    const quota = est.quota ?? 0;
    const usageMb = Math.round((usage / (1024 * 1024)) * 10) / 10;
    const quotaMb = Math.round((quota / (1024 * 1024)) * 10) / 10;
    const remainingMb = quotaMb - usageMb;
    return {
      supported: true,
      usageMb,
      quotaMb,
      lowSpace: quota > 0 && remainingMb < 15,
    };
  } catch {
    return { supported: false, usageMb: 0, quotaMb: 0, lowSpace: false };
  }
}

export function loadJson<T>(key: string, fallback: T): T {
  try {
    const raw = localStorage.getItem(key);
    if (!raw) return fallback;
    return JSON.parse(raw) as T;
  } catch {
    return fallback;
  }
}

export function saveJson<T>(key: string, value: T): boolean {
  try {
    localStorage.setItem(key, JSON.stringify(value));
    return true;
  } catch {
    return false;
  }
}
