import './styles/home.scss';
import Nav from '../nav/Nav';
import { Button } from 'react-bootstrap';
import ThinkingFace from './imgs/thinking-face.png';
import { Dispatch, useState } from 'react';
import axios from 'axios';
import SearchModal from './components/SearchModal';
import LoadingModal, { setAxiosLoadingInterceptor } from '../common/components/LoadingModal';
import { DrugInterface } from './components/Drug';

/**
 *
 * @param drugName : 약 이름
 * @param setDrugsData : 약 검색후 파싱된 데이터를 DrugsData에 저장
 * @param setShowModal : 약 리스트 모달창 On/Off
 * @param setLoadingModal : 로딩 모달창 On/Off
 */
function searchDrug(drugName: String, setDrugsData: Dispatch<DrugInterface[]>, setShowModal: Dispatch<boolean>, setLoadingModal: Dispatch<boolean>): void {
	const url: string =
		'http://apis.data.go.kr/1471000/DrbEasyDrugInfoService/getDrbEasyDrugList?serviceKey=uwUE6B91FWNN6KSuMDrr6xivcPn%2FUbSqjqRVtGCi%2BdHn%2Bh33FlgV%2BB9d81JnEa8RfrC6WkzmGQZf5GJ83spcqQ%3D%3D&itemName=' +
		drugName; //API주소

	setAxiosLoadingInterceptor(setLoadingModal); //Axios로 데이터를 받아올때 로딩창 출력

	axios.get(url).then((result: any) => {
		const tempDrugsArray: DrugInterface[] = []; //API에서 받아온 데이터를 임시 저장할 배열 선언
		//axios로 API 호출
		const xmlParser = new DOMParser(); //API에서 받아온 XML데이터를 파싱하기 위해 DOMParser 생성
		const data: any = xmlParser.parseFromString(result.data, 'text/xml').querySelectorAll('items item'); //DOMParser를 이용해 받아온 XML데이터 파싱후 item만 저장
		data.forEach((ele: any, index: string) => {
			return tempDrugsArray.push({
				//임시 배열에 값 저장
				id: index,
				entpName: ele.querySelector('entpName').textContent,
				itemName: ele.querySelector('itemName').textContent,
				itemSeq: ele.querySelector('itemSeq').textContent,
				efcyQesitm: ele.querySelector('efcyQesitm').textContent.replaceAll('<p>', '').replaceAll('</p>', ''),
				useMethodQesitm: ele.querySelector('useMethodQesitm').textContent.replaceAll('<p>', '').replaceAll('</p>', ''),
				atpnWarnQesitm: ele.querySelector('atpnWarnQesitm').textContent,
				atpnQesitm: ele.querySelector('atpnQesitm').textContent.replaceAll('<p>', '').replaceAll('</p>', ''),
				intrcQesitm: ele.querySelector('intrcQesitm').textContent.replaceAll('<p>', '').replaceAll('</p>', ''),
				seQesitm: ele.querySelector('seQesitm').textContent,
				depositMethodQesitm: ele.querySelector('depositMethodQesitm').textContent.replaceAll('<p>', '').replaceAll('</p>', ''),
				itemImage: ele.querySelector('itemImage').textContent,
			});
		});

		setDrugsData(tempDrugsArray); //의약품 임시데이터를 DrugsData state에 저장
		setShowModal(true); //의약품 리스트 보여줄 Modal창 출력
	});
}

const Home: React.FC = () => {
	const [showModal, setShowModal] = useState<boolean>(false); //SearchModal
	const [showLoadingModal, setShowLoadingModal] = useState<boolean>(false); //LoadingModal
	const [drugName, setDrugName] = useState<String>(''); //약 이름
	const [drugsData, setDrugsData] = useState<DrugInterface[]>([]); //약 이름으로 조회한 약들의 List

	return (
		<div className="home">
			<Nav></Nav>
			<h2 className="catchphrase">
				지금 이 약 <br></br>복용해도 괜찮은걸까?
				<img src={ThinkingFace} alt="thinking-face" />
			</h2>
			<div className="search">
				<h2>약 이름으로 검색해보세요!</h2>
				<input
					type="text"
					onChange={(e) => {
						e.preventDefault();
						setDrugName(e.target.value);
					}}
				/>
				<Button
					onClick={() => {
						searchDrug(drugName, setDrugsData, setShowModal, setShowLoadingModal);
					}}
				>
					검색하기
				</Button>
			</div>
			<SearchModal showProp={showModal} setShowProp={setShowModal} drugsData={drugsData}></SearchModal>
			<LoadingModal showProp={showLoadingModal}></LoadingModal>
		</div>
	);
};

export default Home;
