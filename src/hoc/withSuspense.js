import React, {Suspense} from "react";
import Loader from "../components/Loader/Loader";

export const withSuspense = Component => {

	return (props) => {
		return <Suspense fallback={Loader}><Component {...props}/></Suspense>
	}
};
