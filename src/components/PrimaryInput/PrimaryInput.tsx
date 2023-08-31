import { Input } from '@chakra-ui/react'
import './styles.css'

interface PrimaryInputProps {
    name: string,
    value: string,
    onChange?: React.ChangeEventHandler<HTMLInputElement> | undefined,
    label: string,
    placeholder: string
}

export function PrimaryInput({name, value, onChange, label, placeholder}: PrimaryInputProps) {

    return (
        <div className='input-container'>
            <label className='label'>{label}</label>
            <Input 
                variant='filled' 
                placeholder={placeholder}
                name={name} 
                value={value} 
                onChange={onChange} 
            />
        </div>
    )
}