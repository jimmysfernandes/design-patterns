import { randomUUID } from 'crypto'

export class Singleton {
  
  private static instance: Singleton;

  private constructor(readonly instanceID: string) {}

  static getInstance(): Singleton {
    if (!Singleton.instance) {
      Singleton.instance = new Singleton(randomUUID());
    }
    return Singleton.instance;
  }
}
