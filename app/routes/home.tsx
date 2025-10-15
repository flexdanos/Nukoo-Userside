import { useGetUsersQuery } from '~/store/api';
import { useAppDispatch, useAppSelector } from '~/store/hooks';
import { increment, decrement, incrementByAmount, reset } from '~/store/slices/counterSlice';

export default function HomePage() {
  // Test RTK Query - fetch users from JSONPlaceholder API
  const { data: users, error, isLoading, isFetching } = useGetUsersQuery();
  
  // Test Redux Slice - counter state
  const dispatch = useAppDispatch();
  const counter = useAppSelector((state) => state.counter.value);
  const counterStatus = useAppSelector((state) => state.counter.status);
  
  return (
    <div className="p-4">
      <h1 className="text-2xl font-bold mb-4 text-black">Welcome to Nukoo Userside</h1>
      
      {/* Redux Slice Test - Counter */}
      <div className="mt-6 p-4 bg-blue-50 rounded-lg border border-blue-200">
        <h2 className="text-xl font-semibold mb-3 text-black">
          Redux Slice Test - Counter
        </h2>
        <div className="flex items-center gap-4 mb-3">
          <button
            onClick={() => dispatch(decrement())}
            className="px-4 py-2 bg-red-500 text-white rounded hover:bg-red-600 transition"
          >
            -
          </button>
          <span className="text-3xl font-bold text-black min-w-[60px] text-center">
            {counter}
          </span>
          <button
            onClick={() => dispatch(increment())}
            className="px-4 py-2 bg-green-500 text-white rounded hover:bg-green-600 transition"
          >
            +
          </button>
        </div>
        <div className="flex gap-2">
          <button
            onClick={() => dispatch(incrementByAmount(5))}
            className="px-3 py-1 bg-blue-500 text-white text-sm rounded hover:bg-blue-600 transition"
          >
            +5
          </button>
          <button
            onClick={() => dispatch(incrementByAmount(10))}
            className="px-3 py-1 bg-blue-500 text-white text-sm rounded hover:bg-blue-600 transition"
          >
            +10
          </button>
          <button
            onClick={() => dispatch(reset())}
            className="px-3 py-1 bg-gray-500 text-white text-sm rounded hover:bg-gray-600 transition"
          >
            Reset
          </button>
        </div>
        <p className="text-sm text-gray-600 mt-2">
          Status: <span className="font-semibold">{counterStatus}</span>
        </p>
      </div>
      
      {/* RTK Query Test - API Calls */}
      <div className="mt-6">
        <h2 className="text-xl font-semibold mb-3 text-black">
          RTK Query Test - API Calls
        </h2>
        
        {isLoading && (
          <p className="text-blue-600">Loading users from API...</p>
        )}
        
        {error && (
          <p className="text-red-600">
            Error loading users: {JSON.stringify(error)}
          </p>
        )}
        
        {users && (
          <div>
            <p className="text-green-600 mb-3">
              ✓ Successfully fetched {users.length} users!
            </p>
            <div className="space-y-2">
              {users.slice(0, 5).map((user) => (
                <div 
                  key={user.id} 
                  className="p-3 bg-gray-100 rounded border border-gray-300"
                >
                  <p className="font-semibold text-black">{user.name}</p>
                  <p className="text-sm text-gray-600">{user.email}</p>
                  <p className="text-xs text-gray-500">@{user.username}</p>
                </div>
              ))}
            </div>
            {users.length > 5 && (
              <p className="text-sm text-gray-500 mt-2">
                ...and {users.length - 5} more users
              </p>
            )}
          </div>
        )}
        
        {isFetching && !isLoading && (
          <p className="text-sm text-gray-500 mt-2">Refreshing data...</p>
        )}
      </div>
    </div>
  );
}
