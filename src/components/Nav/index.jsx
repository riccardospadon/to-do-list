import { Container, Navbar } from "react-bootstrap";
import styles from './style.module.scss'
import cn from 'classnames'

export default function Nav(){
    return(
        <Navbar className={cn(styles.navBg, 'mb-2')}>
            <Container className="justify-content-center">
                <h1 className={cn(styles.colorTitle)}>TO DO LIST</h1>
            </Container>
        </Navbar>
    )
} 