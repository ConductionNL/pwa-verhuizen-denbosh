import Image from 'next/image';
import Container from '@material-ui/core/Container';
import Link from '@material-ui/core/Link';

export default function Logo() {
  return (
    <>
      <Container>
        <div style={{margin: 'auto',marginBottom: '20px',marginBottom: '10px', width: '400px'}}>
          <Link href="/">
            <Image src="/../public/logo_denbosch.svg" height={75} width={300} alt="Picture of the author"/>
          </Link>
        </div>
      </Container>
    </>
  )
}
