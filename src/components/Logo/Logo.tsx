import clsx from 'clsx'
import React from 'react'

interface Props {
  className?: string
  loading?: 'lazy' | 'eager'
  priority?: 'auto' | 'high' | 'low'
}

export const Logo = (props: Props) => {
  const { loading: loadingFromProps, priority: priorityFromProps, className } = props

  const loading = loadingFromProps || 'lazy'
  const priority = priorityFromProps || 'low'

  return (
    /* eslint-disable @next/next/no-img-element */
    <img
      alt="Vito Royeca Logo"
      width={300}
      height={100}
      loading={loading}
      fetchPriority={priority}
      decoding="async"
      className={className}
      src="/vitoroyeca_logo.png"
    />
  )
}
