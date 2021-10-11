import Image from 'next/image';
import Container from '@material-ui/core/Container';
import Link from '@material-ui/core/Link';

export default function Logo() {
  return (
    <>
      <Container>
        <div style={{margin: 'auto',width: '400px'}}>
          <Link href="/">
            <Image src="/../public/logo_zaanstad.svg" height={100} width={400} alt="Picture of the author"/>
          </Link>
        </div>
      </Container>
    </>
  )
}
