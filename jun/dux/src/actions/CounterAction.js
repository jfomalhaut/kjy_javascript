// 업무의 정의
const INCREASEMENT = 'INCREASEMENT';
const DECREASEMENT = 'DECREASEMENT';

// dispatch하는 기능들을 함수로 관리
const onIncrease = () => ({ type: INCREASEMENT });
const onDecrease = () => ({ type: DECREASEMENT });

export default {
	INCREASEMENT,
	DECREASEMENT,
	onIncrease,
	onDecrease,
};