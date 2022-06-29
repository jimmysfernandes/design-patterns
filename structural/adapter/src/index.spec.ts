import { CSVWriter, CSVWriterAdapter, Customer, CustomerService } from "."

describe('CSVWriter', () => {
  const expectedCSV = `name;email\nJimmy Fernandes;jimmysferanndes@gmail.com`;
  it('should writer string in csv format', () => {
    const writer = new CSVWriter();
    const header = 'name;email';
    const content = 'Jimmy Fernandes;jimmysferanndes@gmail.com'
    expect(writer.write(header, content)).toBe(expectedCSV)
  })
})

describe('CSVWriterAdapter', () => {
  const expectedCSV = `name;email\nJimmy Fernandes;jimmysferanndes@gmail.com`;
  it('should writer data in csv format', () => {
    const writer = new CSVWriter();
    const writerAdapter = new CSVWriterAdapter(writer);
    const data = [{ 'name': 'Jimmy Fernandes', 'email': 'jimmysferanndes@gmail.com' }]
    expect(writerAdapter.write(data)).toBe(expectedCSV)
  })
})

describe('CustomerService', () => {
  const expectedCSV = `name;email\nJimmy Fernandes;jimmysferanndes@gmail.com`;
  it('should writer customers list in csv format', () => {
    const writerAdapter = new CSVWriterAdapter(new CSVWriter());
    const customerService = new CustomerService(writerAdapter);
    const customers = [new Customer('Jimmy Fernandes', 'jimmysferanndes@gmail.com')]
    expect(customerService.saveAll(customers)).toBe(expectedCSV)
  })
})
