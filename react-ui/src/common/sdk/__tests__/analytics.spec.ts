import sinon from 'sinon'
import { expect } from 'chai'
import * as helpers from '../helper'
import { createResolver } from 'src/common/test-utils'
import { sendAnalyticsEvent } from 'src/common/sdk/analytics'

describe('src/common/asdk/analytics', () => {
    const sandbox = sinon.createSandbox()
    let stub
    const resolver = createResolver()
    beforeEach(() => {
        stub = sandbox.stub(helpers, 'doRequest').returns(resolver.promise)
    })

    it('When no event is passed to the sendAnalytics', async () => {
        sendAnalyticsEvent()
        expect(stub).to.have.callCount(0)
    })

    // it('when doRequest succeeds', () => {

    // })

    // it('when doRequest fails', () => {

    // })
})
