import styles from './footer.module.css'
export const Footer = () => {
	const year = new Date()
	return (
		<footer className={styles.footer}>
			<p className={styles.text}>
				{year.getFullYear()}
			</p>
		</footer>
	)
}


