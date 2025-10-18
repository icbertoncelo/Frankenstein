interface ArticleContent {
  title: string;
  upvotes: number;
  date: string;
}

interface ArticlesProps {
  articles: ArticleContent[];
}

function Articles({ articles }: ArticlesProps) {
  return (
    <div className="w-full max-w-2xl mx-auto bg-white rounded-lg shadow-md p-6">
      <table className="min-w-full divide-y divide-gray-200">
        <thead>
          <tr>
            <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
              Title
            </th>
            <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
              Upvotes
            </th>
            <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
              Date
            </th>
          </tr>
        </thead>
        <tbody className="bg-white divide-y divide-gray-100">
          {articles.map((article) => (
            <tr data-testid="article" key={article.title}>
              <td
                data-testid="article-title"
                className="px-6 py-4 whitespace-nowrap text-sm text-gray-900"
              >
                {article.title}
              </td>
              <td
                data-testid="article-upvotes"
                className="px-6 py-4 whitespace-nowrap text-sm text-gray-900"
              >
                {article.upvotes}
              </td>
              <td
                data-testid="article-date"
                className="px-6 py-4 whitespace-nowrap text-sm text-gray-900"
              >
                {new Date(article.date).toLocaleDateString()}
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

export default Articles;
