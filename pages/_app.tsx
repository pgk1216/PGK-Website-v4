import {motion, AnimatePresence} from 'framer-motion';
import '@/styles/globals.css'
import { useRouter } from 'next/router';
import type { AppProps } from 'next/app'

export default function App({ Component, pageProps }: AppProps) {
  const router = useRouter();
  return (
    <AnimatePresence mode='wait'>
      <motion.div
        key={router.route}
        initial='initialState'
        animate='animateState'
        exit='exitState'
        transition={{
          duration: 1,
        }}
        variants={{
          initialState: {
            opacity: 0,
          },
          animateState: {
            opacity: 1,
          },
          exitState: {

          },
        }}
        className='base-page-size'>
        <Component {...pageProps} />
      </motion.div>
    </AnimatePresence>
  )
}
