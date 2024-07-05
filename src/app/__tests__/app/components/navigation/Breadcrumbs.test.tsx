import { render, screen } from '@testing-library/react'
import Breadcrumbs from '@/app/components/navigation/Breadcrumbs'
import '@testing-library/jest-dom'

describe('Breadcrumbs', () => {
  it('should render breadcrumbs with default configuration', () => {
    render(<Breadcrumbs breadcrumbs={[{ id: 1, name: 'Home', href: '/' }, { id: 2, name: 'SSR', href: '/products-ssr' }]} current="Product 1" />)
    expect(screen.getByText('Home')).toBeInTheDocument()
    expect(screen.getByText('SSR')).toBeInTheDocument()
    expect(screen.getByText('Product 1')).toBeInTheDocument()
  })

  it('should render breadcrumbs with current page not a link', () => {
    render(<Breadcrumbs breadcrumbs={[{ id: 1, name: 'Home', href: '/' }, { id: 2, name: 'SSR', href: '/products-ssr' }]} current="Product 1" />)
    expect(screen.getByText('Product 1')).not.toHaveAttribute('href')
  })
})