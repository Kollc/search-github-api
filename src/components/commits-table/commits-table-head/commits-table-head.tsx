function CommitsTableHead(): JSX.Element {
  return (
    <thead>
      <tr>
        <th
          scope="col"
          className="px-5 py-3 bg-white  border-b border-gray-200 text-gray-800  text-left text-sm uppercase font-normal"
        >
          Автор
        </th>
        <th
          scope="col"
          className="px-5 py-3 bg-white  border-b border-gray-200 text-gray-800  text-left text-sm uppercase font-normal"
        >
          Хэш коммита
        </th>
        <th
          scope="col"
          className="px-5 py-3 bg-white  border-b border-gray-200 text-gray-800  text-left text-sm uppercase font-normal"
        >
          Дата
        </th>
      </tr>
    </thead>
  );
}

export default CommitsTableHead;
