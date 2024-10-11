import * as RadixSwitch from '@radix-ui/react-switch';
import styles from './switch.module.css';
import { CustomSwitchProps } from './type';

const Switch: React.FC<CustomSwitchProps> = ({
  label,
  labelPosition = 'left',
  checked = false,
  onCheckedChange,
  ...otherProps
}) => {
  return (
    <div
      className={styles.switchContainer}
      id={otherProps.id}
      data-testid={otherProps['data-testid']}
      style={otherProps.style}
    >
      {label && labelPosition === 'left' && (
        <label className={styles.label}>{label}</label>
      )}
      <RadixSwitch.Root
        className={styles.switch}
        checked={checked}
        onCheckedChange={onCheckedChange}
        data-state={checked ? 'on' : 'off'}
      >
        <span className={styles.indicator} />
      </RadixSwitch.Root>
      {label && labelPosition === 'right' && (
        <label className={styles.labelRight}>{label}</label>
      )}
    </div>
  );
};

export default Switch;
