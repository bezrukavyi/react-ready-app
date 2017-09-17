import React from 'react'
import { connect } from 'react-redux'
import { pick } from 'utils'
import { keys, transform } from 'lodash'

const extractLifeCycleProps = pick([
  'componentWillMount',
  'render',
  'componentDidMount',
  'componentWillReceiveProps',
  'shouldComponentUpdate',
  'componentWillUpdate',
  'componentDidUpdate',
  'componentWillUnmount',
])


const injectToComponent = (Component, ...props) => {
  return React.createClass({
    render() { return <Component { ...this.props } { ...this.state } /> },
    ...lifeCycleProps(...props)
  })
}

const lifeCycleProps = (props) => {
  const hooks = keys(extractLifeCycleProps(props || {}))
  return transform(hooks, (result, hook) => result[hook] = lifeCycleHook(hook), {})
}

const lifeCycleHook = (hook) => function(...args) { this.props[hook](args[0]) }

const connectWithLifeCycle = (stateProps, dispatchProps, mergeProps) => Component => {
  const Container = injectToComponent(Component, dispatchProps, mergeProps)
  return connect(stateProps, dispatchProps, mergeProps)(Container)
}

export default connectWithLifeCycle
