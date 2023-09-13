import { render,screen } from '@testing-library/react'
import Header from "../Components/Header/Header"

test('renders header text', () => {
    render(<Header />)
    expect(screen.getByText('Welcome to this site!')).toBeInTheDocument()
})