import { useEffect, useState } from 'react';

function App() {
	const [datas, setDatas] = useState([]);

	useEffect(() => {
		fetch('https://65f8bae0df151452460ff872.mockapi.io/data')
			.then((response) => response.json())
			.then((data) => setDatas(data));
	}, []);

	return (
		<div className="flex items-center justify-center h-screen bg-zinc-400">
			<div className="flex flex-col justify-center items-center ">
				<div className="overflow-auto w-4/6 h-72 shadow-xl shadow-zinc-600 ">
					<table className="text-center text-sm font-light border-collapse border-2 rounded-md bg-white">
						<thead className="border-b bg-white font-medium sticky top-0 ">
							<tr className="divide-x divide-gray-200">
								<th className="px-6 py-4">Ref</th>
								<th className="px-6 py-4">Date</th>
								<th className="px-6 py-4">Currency</th>
								<th className="px-6 py-4">TaxIncluded</th>
								<th className="px-6 py-4">NCF</th>
								<th className="px-6 py-4">NCFExpirationDate</th>
								<th className="px-6 py-4">ExchangeRate</th>
								<th className="px-6 py-4">TipoIngreso</th>
								<th className="px-6 py-4">TipoPago</th>
								<th className="px-6 py-4">LinesPerPrintedPage</th>
								<th className="px-6 py-4">SupplierID</th>
								<th className="px-6 py-4">CIF</th>
							</tr>
						</thead>
						<tbody>
							{datas.map((data, index) => (
								<tr key={index} className="border-b divide-x divide-gray-200">
									<td className="whitespace-nowrap px-6 py-4 font-medium">
										{data.ref}
									</td>
									<td className="whitespace-nowrap px-6 py-4">{data.Date}</td>
									<td className="whitespace-nowrap px-6 py-4">
										{data.Currency}
									</td>
									<td className="whitespace-nowrap px-6 py-4">
										{data.TaxIncluded}
									</td>
									<td className="whitespace-nowrap px-6 py-4">{data.NCF}</td>
									<td className="whitespace-nowrap px-6 py-4">
										{data.NCFExpirationDate}
									</td>
									<td className="whitespace-nowrap px-6 py-4">
										{data.ExchangeRate}
									</td>
									<td className="whitespace-nowrap px-6 py-4">
										{data.TipoIngreso}
									</td>
									<td className="whitespace-nowrap px-6 py-4">
										{data.TipoPago}
									</td>
									<td className="whitespace-nowrap px-6 py-4">
										{data.LinesPerPrintedPage}
									</td>
									<td className="whitespace-nowrap px-6 py-4">
										{data.SupplierID}
									</td>
									<td className="whitespace-nowrap px-6 py-4">{data.CIF}</td>
								</tr>
							))}
						</tbody>
					</table>
				</div>
			</div>
		</div>
	);
}

export default App;
