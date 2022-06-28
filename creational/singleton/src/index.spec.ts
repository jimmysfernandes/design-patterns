import { Singleton } from "."

describe('Singleton', () => {
  it('should return the same instance on all calls', () => {
    const instance01 = Singleton.getInstance();
    const instance02 = Singleton.getInstance();
    expect(instance01).toBe(instance02);
    expect(instance01.instanceID).toBe(instance02.instanceID);
  })
})
