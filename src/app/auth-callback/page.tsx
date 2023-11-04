import { useRouter, useSearchParams } from "next/navigation"
import { trpc } from "../_trpc/client";


const Page = async () => {

    const router = useRouter()

    const searchParams = useSearchParams();
    const origin = searchParams.get('origin')

    trpc.authCallback.useQuery(undefined, {
        onSuccess: ({ success }) => {
            if (success) {
                router.push(origin ? `/${origin}` : '/dashboard')
            }
        },

        onError: ( error ) => {
            if (error.data?.code == 'UNAUTHORIZED') {
                router.push('/sign-in')
            }
        },
        retry: true,
        retryDelay: 500
    })
}

export default Page  