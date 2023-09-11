import '@/styles/globals.css'
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import type { AppProps } from 'next/app'
import { Montserrat } from 'next/font/google';

const montserrat = Montserrat({ subsets: ["latin"] })
const queryClient = new QueryClient()
export default function App({ Component, pageProps }: AppProps) {
  return <QueryClientProvider client={queryClient}>
    <div className={montserrat.className}> 
    <Component {...pageProps} />
    </div>
    </QueryClientProvider>
}
