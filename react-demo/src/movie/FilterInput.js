import React from 'react'
import PropTypes from 'prop-types'

class FilterInput extends React.Component {
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

FilterInput.propTypes = {
    label: PropTypes.string,
    checked: PropTypes.bool,
    value: PropTypes.string,
    onCheckChange: PropTypes.func,
    onValueChange: PropTypes.func,
}

export default FilterInput