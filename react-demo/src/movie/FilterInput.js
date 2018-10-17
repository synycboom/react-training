import React from 'react'

export default class FilterInput extends React.Component {
    render() {
        const {
            label,
            checked,
            value,
            onCheckChange,
            onValueChange,
        } = this.props

        return (
            <div className='FilterInput'>
                <div className='FilterInput__Container'>
                    <label>
                        <input
                            type='checkbox'
                            checked={checked}
                            onChange={onCheckChange}
                        />
                        {label}
                    </label>
                    <input
                        disabled={!checked}
                        value={value}
                        onChange={onValueChange}
                    />
                </div>
            </div>
        ) 
    }
}