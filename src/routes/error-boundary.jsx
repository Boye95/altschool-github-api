import React from 'react'
import { Link } from 'react-router-dom'

class ErrorBoundary extends React.Component {
  constructor (props) {
    super(props)
    this.state = { hasError: false }
  }

  static getDerivedStateFromError (error) {
    return { hasError: true }
  }

  componentDidCatch (error, errorInfo) {
    console.log(error, errorInfo)
  }

  render () {
    if (this.state.hasError) {
      return (
        <div className='error-boundary'>
          <p>Something definitely is missing</p>
          <p>
            Let's take you back 
            <Link
            to='/'
            className='border-2 border-emerald-100 rounded-lg py-1 px-4 text-white bg-emerald-500 shadow-lg ring-2 ring-emerald-200 ring-offset-2 transition-all hover:text-black hover:bg-white hover:shadow-sm hover:ring-offset-1 sm:text-sm'
          >
            Go Back Home
          </Link>
          </p>
        </div>
      )
    }

    return this.props.children
  }
}

export default ErrorBoundary
