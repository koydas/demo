import React from 'react'
import { Icon } from './add_user.styles.js'
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faAdd, faUser } from '@fortawesome/free-solid-svg-icons';

const AddUser = ({  }) => <Icon>
    <FontAwesomeIcon className="user" icon={faUser} />
    <FontAwesomeIcon className="add" icon={faAdd} />
</Icon>

export default AddUser