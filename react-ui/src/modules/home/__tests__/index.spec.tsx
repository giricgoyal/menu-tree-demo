import React from 'react'
import ShallowRenderer from 'react-test-renderer/shallow'
import Home from 'src/modules/home'

describe('modules/home', () => {
    let container
    const renderer = new ShallowRenderer()

    beforeEach(() => {
        container = renderer.render(<Home />)
    })

    test('should render and match snapshot', () => {
        expect(container).toMatchSnapshot()
    })
})
