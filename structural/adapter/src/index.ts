export class CSVWriter {
  write(headers: string, content: string): string {
    return `${headers}\n${content}`
  }
}

export class CSVWriterAdapter {

  constructor(readonly writer: CSVWriter) {}

  write(data: any[]): string {
    const headers = Object.keys(data[0]).join(';');
    const content = data.map(i => Object.values(i).join(';')).join('\n');
    return this.writer.write(headers, content);
  }
}

export class Customer {
  constructor(readonly name: string, readonly email: string) {}
}

export class CustomerService {

  constructor(readonly writer: CSVWriterAdapter) {}

  saveAll(customers: Customer[]): string {
    return this.writer.write(customers);
  }
}
