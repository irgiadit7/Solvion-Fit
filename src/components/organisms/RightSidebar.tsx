import React from 'react';

const UserIconPlaceholder = () => <div className="w-8 h-8 bg-zinc-600 rounded-full"></div>;

export const RightSidebar = () => {
    return (
        <aside className="hidden xl:block w-80 flex-shrink-0 px-4 py-6">
            <div className="space-y-6">
                {/* Sponsored Section */}
                <div>
                    <h3 className="text-zinc-400 font-semibold mb-2">Sponsored</h3>
                    <div className="p-4 bg-zinc-800 rounded-lg">
                        <div className="w-full h-24 bg-zinc-700 rounded mb-2"></div>
                        <p className="text-sm text-white">Placeholder Ad</p>
                        <p className="text-xs text-zinc-400">placeholder.com</p>
                    </div>
                </div>

                {/* Contacts Section */}
                <div>
                    <h3 className="text-zinc-400 font-semibold mb-2">Contacts</h3>
                    <div className="space-y-3">
                        <div className="flex items-center gap-3 p-1 rounded-lg hover:bg-zinc-700 cursor-pointer">
                            <UserIconPlaceholder />
                            <span className="text-zinc-300">Friend One</span>
                        </div>
                         <div className="flex items-center gap-3 p-1 rounded-lg hover:bg-zinc-700 cursor-pointer">
                            <UserIconPlaceholder />
                            <span className="text-zinc-300">Friend Two</span>
                        </div>
                         <div className="flex items-center gap-3 p-1 rounded-lg hover:bg-zinc-700 cursor-pointer">
                            <UserIconPlaceholder />
                            <span className="text-zinc-300">Friend Three</span>
                        </div>
                    </div>
                </div>
            </div>
        </aside>
    );
};