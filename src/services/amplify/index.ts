const config = {
  Auth: {
    region: process.env.NEXT_PUBLIC_AUTH_REGION,
    userPoolId: process.env.NEXT_PUBLIC_AUTH_USER_POOL_ID,
    userPoolWebClientId: process.env.NEXT_PUBLIC_AUTH_USER_POOL_WEB_CLIENT_ID,
    authenticationFlowType: 'USER_PASSWORD_AUTH'
  }
}

export default config

