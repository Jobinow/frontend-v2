import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class PersistanceService {

  constructor() { }

  set(key: string, data: unknown): void {
    try {
      localStorage.setItem(key, JSON.stringify(data));
    }catch(e) {
      console.error("Error saving to local storage", e);
    }
  }

  get(key: string): unknown {
    try {
      const item = localStorage.getItem(key);
      return item ? JSON.parse(item) : null;
    }catch(e) {
      console.error("Error getting from local storage", e);
      return null;
    }
  }

  clear(key: string): unknown {
    try {
      const item = localStorage.getItem(key);
      return item ? localStorage.removeItem(key) : null;
    }catch(e) {
      console.error("Error removing from local storage", e);
      return null;
    }
  }
}
