import styles from './button.module.css'

export const Button = (props) => {
	const { children, disabled = false } = props
	return <button
		{...props}
		className={styles.button}
		disabled={disabled}
	>{children}

	</button>
}
