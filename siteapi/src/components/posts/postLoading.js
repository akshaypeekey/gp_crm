import React from 'react';

function PostLoading(Component) {
	return function PostLoadingComponent({ isLoading, ...props }) {

		let auth = localStorage.getItem('access_token')
        if(auth === null) {
             return (
                 <p style={{ fontSize: '25px' }}>
                    Please Login to view listings...
                 </p>
              );
         }
        return <Component {...props} />;
	};
}
export default PostLoading;