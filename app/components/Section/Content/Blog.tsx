import React from "react";

const posts = [
    {
      id: 1,
      title: 'Fahrt zum Pokalfinale',
      href: '#',
      description: 'Illo sint voluptas. Error voluptates culpa eligendi. Hic vel totam vitae illo. Non aliquid explicabo necessitatibus unde. Sed exercitationem placeat consectetur nulla deserunt vel. Iusto corrupti dicta.',
      date: 'Apr 13, 2024',
      datetime: '2024-04-13',
      category: { title: 'AKTUELL', href: '#' },
      author: {
        name: 'Wuppi',
        href: '#',
        imageUrl: 'https://www.nk12.de/wp-content/uploads/2013/07/Fototapete-final-12.jpg',
      },
      // Add cover image URL
      coverImageUrl: 'https://www.nk12.de/wp-content/uploads/2013/07/Fototapete-final-12.jpg',
    },
    {
        id: 2,
        title: 'Spieltagsinfos Bremene',
        href: '#',
        description: 'Morgen starten wir Finally Red. Alle in Rot! Zusätzlich rufen wir zum Flag Day auf. Bringt Eure Fahnen mit ins Haberland!',
        date: 'Apr 13, 2024',
        datetime: '2024-04-13',
        category: { title: 'AKTUELL', href: '#' },
        author: {
          name: 'Wuppi',
          href: '#',
          imageUrl: 'https://www.nk12.de/wp-content/uploads/2013/07/Fototapete-final-12.jpg',
        },
        coverImageUrl: 'https://www.nk12.de/wp-content/uploads/2024/04/photo_2024-04-11_09-36-50.jpg',
      },
      {
        id: 3,
        title: 'Spieltagsinfos Bremen',
        href: '#',
        description: 'Morgen starten wir Finally Red. Alle in Rot! Zusätzlich rufen wir zum Flag Day auf. Bringt Eure Fahnen mit ins Haberland!',
        date: 'Apr 13, 2024',
        datetime: '2024-04-13',
        category: { title: 'AKTUELL', href: '#' },
        author: {
          name: 'Wuppi',
          href: '#',
          imageUrl: 'https://www.nk12.de/wp-content/uploads/2013/07/Fototapete-final-12.jpg',
        },
        coverImageUrl: 'https://www.nk12.de/wp-content/uploads/2024/04/photo_2024-04-09_16-23-58.jpg',
      },
    // More posts...
  ];
  
  export default function BlogSection() {
    return (
      <div className="bg-white py-24 sm:py-32">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="mx-auto max-w-2xl lg:mx-0">
            <h2 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">News</h2>
            <p className="mt-2 text-lg leading-8 text-gray-600">
              Match information, tours and other announcements
            </p>
          </div>
          <div className="mx-auto mt-10 grid max-w-2xl grid-cols-1 gap-x-8 gap-y-16 border-t border-gray-200 pt-10 sm:mt-16 sm:pt-16 lg:mx-0 lg:max-w-none lg:grid-cols-3">
            {posts.map((post) => (
              <article key={post.id} className="flex max-w-xl flex-col items-start justify-between">
                {/* Cover image */}
                <div className="w-full aspect-w-16 aspect-h-9 mb-4 rounded-lg overflow-hidden shadow-md border border-gray-200">
                  <img
                    src={post.coverImageUrl}
                    alt={post.title}
                    className="w-full h-full object-cover"
                  />
                </div>
                {/* Metadata */}
                <div className="flex items-center gap-x-4 text-xs">
                  <time dateTime={post.datetime} className="text-gray-500">
                    {post.date}
                  </time>
                  <a
                    href={post.category.href}
                    className="relative z-10 rounded-full bg-gray-50 px-3 py-1.5 font-medium text-gray-600 hover:bg-gray-100"
                  >
                    {post.category.title}
                  </a>
                </div>
                {/* Title and description */}
                <div className="group relative">
                  <h3 className="mt-3 text-lg font-semibold leading-6 text-gray-900 group-hover:text-gray-600">
                    <a href={post.href}>
                      <span className="absolute inset-0" />
                      {post.title}
                    </a>
                  </h3>
                  <p className="mt-5 line-clamp-3 text-sm leading-6 text-gray-600">{post.description}
                  </p>
                </div>
                {/* Author */}
                <div className="relative mt-8 flex items-center gap-x-4">
                  <img src={post.author.imageUrl} alt={post.author.name} className="h-10 w-10 rounded-full bg-gray-50" />
                  <div className="text-sm leading-6">
                    <p className="font-semibold text-gray-900">
                      <a href={post.author.href}>
                        <span className="absolute inset-0" />
                        {post.author.name}
                      </a>
                    </p>
                    {/* Role information can be uncommented if available */}
                    {/* <p className="text-gray-600">{post.author.role}</p> */}
                  </div>
                </div>
              </article>
            ))}
          </div>
        </div>
      </div>
    );
  }
  