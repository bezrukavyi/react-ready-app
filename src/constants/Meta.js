import * as path from 'constants/Path'
import * as Text from 'constants/Text'

const prefix = (name) => `${Text.LOGO} | ${name}`

const metaInfo = (title, template = prefix, link, meta) => ({ title: template(title), link, meta })

export default {
  [path.ROOT]: metaInfo(Text.DESCRIPTION),
  [path.SIGN_IN]: metaInfo('Sign in'),
  [path.SIGN_UP]: metaInfo('Sign up'),
  [path.FORGOT_PASSWORD]: metaInfo('Forgot password'),
  [path.ERROR_404]: metaInfo('Not Found'),
  [path.ERROR_500]: metaInfo('Error'),
}
