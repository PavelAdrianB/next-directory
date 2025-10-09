import StartupCard from '@/components/StartupCard';
import SearchForm from '../../components/SearchForm';

export default async function Home({
  searchParams,
}: {
  searchParams: Promise<{ query?: string }>;
}) {
  const query = (await searchParams).query;

  const posts = [
    {
      _createdAt: new Date(),
      views: 55,
      author: { _id: 1, name: 'Adrian' },
      _id: 1,
      description: 'This is a description',
      image:
        'https://erepublic.brightspotcdn.com/dims4/default/220290f/2147483647/strip/false/crop/8081x4555+0+0/resize/1486x838!/quality/90/?url=http%3A%2F%2Ferepublic-brightspot.s3.us-west-2.amazonaws.com%2F44%2F0c%2Fbf3043cf4952945a5b3281fcfa16%2Fadobestock-955269760.jpeg',
      category: 'Robots',
      title: 'We Robots',
    },
  ];

  return (
    <>
      <section className="pink_container">
        <h1 className="heading">
          Pitch Your Startup, <br /> Connect With Entrepreneurs
        </h1>
        <p className="sub-heading !max-w-3xl">
          Submit Ideas, Vote on Pitches, and Get Noticed in Virtual
          Competitions.
        </p>
        <SearchForm query={query} />
      </section>
      <section className="section_container">
        <p className="text-30-semibold">
          {query ? `Search result for "${query}"` : 'All Startups'}
        </p>
        <ul className="mt-t card_grid">
          {posts?.length > 0 ? (
            posts.map((post: StartupCardType) => (
              <StartupCard key={post?._id} post={post} />
            ))
          ) : (
            <p className="no-results">No startups found</p>
          )}
        </ul>
      </section>
    </>
  );
}
