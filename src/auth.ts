import NextAuth from "next-auth"
 
export const { handlers, signIn, signOut, auth } = NextAuth({
  providers: [{
	id: "misskey",
	name: "Misskey",
	type: "oauth",
	issuer: process.env.MISSKEY_URL,
  }],
})
