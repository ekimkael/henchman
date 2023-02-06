export interface IAuthContext<TData> {
	user?: AuthUser<TData>
	isLoading: boolean
	setUser?: (arg: TData) => void
}

interface AuthUser<TData> {
	data: TData
	token: string
}
