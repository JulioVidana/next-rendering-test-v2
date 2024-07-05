import { render, screen } from '@testing-library/react'
import ProductList from '@/app/components/products/ProductList'
import { Product } from '@/types/product'
import '@testing-library/jest-dom'

//describe is a function that groups together related tests
describe('ProductList', () => {
  const mockData: Product[] = [
    {
      id: 1,
      name: 'Product 1',
      price: '$100',
      imageSrc: null,
      imageAlt: null,
      details: 'Product 1 details',
      description: 'Product 1 description',
      highlights: 'highlight 1'
    },
    {
      id: 2,
      name: 'Product 2',
      price: '$200',
      imageSrc: null,
      imageAlt: null,
      details: 'Product 2 details',
      description: 'Product 2 description',
      highlights: 'highlight 2'
    }
  ]

  //it is a function that runs a test
  it('should render the title', () => {
    render(<ProductList title="Test Title" description="Test Description" data={mockData} pathname="test-path" />)
    expect(screen.getByText('Test Title')).toBeInTheDocument()
  })

  it('should render the description', () => {
    render(<ProductList title="Test Title" description="Test Description" data={mockData} pathname="test-path" />)
    expect(screen.getByText('Test Description')).toBeInTheDocument()
  })

  it('should not render the description if not provided', () => {
    render(<ProductList title="Test Title" data={mockData} pathname="test-path" />)
    expect(screen.queryByText('Test Description')).toBeNull()
  })

  it('should render the correct number of products', () => {
    render(<ProductList title="Test Title" description="Test Description" data={mockData} pathname="test-path" />)
    const products = screen.getAllByText(/Product/)
    expect(products).toHaveLength(mockData.length)
  })

  it('should render the correct product data', () => {
    render(<ProductList title="Test Title" description="Test Description" data={mockData} pathname="test-path" />)
    expect(screen.getByText('Product 1')).toBeInTheDocument()
    expect(screen.getByText('$100')).toBeInTheDocument()
    expect(screen.getByText('Product 2')).toBeInTheDocument()
    expect(screen.getByText('$200')).toBeInTheDocument()
  })

  it('should render the correct product links', () => {
    render(<ProductList title="Test Title" description="Test Description" data={mockData} pathname="test-path" />)
    expect(screen.getByText('Product 1').closest('a')).toHaveAttribute('href', '/test-path/1')
    expect(screen.getByText('Product 2').closest('a')).toHaveAttribute('href', '/test-path/2')
  })
})