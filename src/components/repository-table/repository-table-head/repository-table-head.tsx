function RepositoryTableHead(): JSX.Element {
  return (
    <thead>
      <tr>
        <th
          scope="col"
          className="px-5 py-3 bg-gray-200  border-b border-gray-200 text-gray-800  text-left text-sm uppercase font-normal"
        >
          Наименование
        </th>
        <th
          scope="col"
          className="px-5 py-3 bg-gray-200  border-b border-gray-200 text-gray-800  text-left text-sm uppercase font-normal"
        >
          Язык программирования
        </th>
        <th
          scope="col"
          className="px-5 py-3 bg-gray-200  border-b border-gray-200 text-gray-800  text-left text-sm uppercase font-normal"
        >
          Описание
        </th>
        <th
          scope="col"
          className="px-5 py-3 bg-gray-200  border-b border-gray-200 text-gray-800  text-left text-sm uppercase font-normal"
        >
          Количество звезд
        </th>
      </tr>
    </thead>
  );
}

export default RepositoryTableHead;
