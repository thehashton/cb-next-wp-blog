import Container from './container'
import cn from 'classnames'
import { EXAMPLE_PATH } from '../lib/constants'

export default function Alert() {
  return (
    <div
      className={cn('border-b', {
        'bg-accent-7 border-accent-7 text-white': '',
        'bg-accent-1 border-accent-2': '',
      })}
    >
      <Container>
        <div className="py-2 text-center text-sm">
            <p>This is an alert</p>
        </div>
      </Container>
    </div>
  )
}
