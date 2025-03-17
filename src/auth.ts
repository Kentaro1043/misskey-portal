import NextAuth from "next-auth"

export const { handlers, signIn, signOut, auth } = NextAuth({
  providers: [
    {
      id: "misskey",
      name: "Misskey",
      type: "oauth",
	    issuer: process.env.MISSKEY_URL,
      authorization: {
		    url: process.env.MISSKEY_URL + "/oauth/authorize",
		    params: {
			    scope: "read:account",
		    }
	    },
      token: {
        url: process.env.MISSKEY_URL + "/oauth/token",
        params: {
          grant_type: "authorization_code",
        }
      },
      clientId: process.env.SERVER_URL + "/about",
      checks: [ 'state', 'pkce' ],
    }
  ]
})
