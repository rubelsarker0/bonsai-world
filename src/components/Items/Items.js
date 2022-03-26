import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faTrash } from '@fortawesome/free-solid-svg-icons';

const Items = ({ items, deleteSingleCartItem }) => {
	return (
		<div className="row align-items-center justify-content-center mb-2">
			<div className="col-4">
				<img
					src={items.bonsaiImg}
					className="img-fluid rounded "
					alt="bonsai-images"
				/>
			</div>
			<div className="col-6">
				<p>{items.bonsaiName}</p>
			</div>
			<div className="col-2">
				<FontAwesomeIcon
					onClick={() => deleteSingleCartItem(items.id)}
					icon={faTrash}
					className="generic-color cursor-pointer"
				/>
			</div>
		</div>
	);
};

export default Items;
