const FRONT_END_URL = 'webPath/FRONT_END_URL' as const;
const BACK_END_URL = 'webpath/BACK_END_URL' as const;

export const frontEndURL = () => ({ type: FRONT_END_URL });
export const backEndURL = () => ({ type: BACK_END_URL });

type WebPathState = {
	frontEndURL: string;
	backEndURL: string;
};

const initialState: WebPathState = {
	frontEndURL: 'http://localhost:3000',
	backEndURL: 'http://localhost:8080',
};

type WebPathAction = ReturnType<typeof frontEndURL> | ReturnType<typeof backEndURL>;

function webPath(state: WebPathState = initialState, action: WebPathAction): WebPathState {
	switch (action.type) {
		case FRONT_END_URL:
			return { ...state, frontEndURL: state.frontEndURL };
		default:
			return state;
	}
}

export default webPath;
