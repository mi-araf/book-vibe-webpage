import React from 'react';

const ErrorPage = () => {
    return (
        <div className="hero min-h-screen bg-base-200 px-4">
            <div className="hero-content w-full max-w-5xl flex-col lg:flex-row-reverse gap-10">
                {/* Right side visual */}
                <div className="relative flex-1">
                    <div className="absolute inset-0 blur-3xl opacity-30 bg-linear-to-tr from-primary via-secondary to-accent rounded-full"></div>

                    <div className="relative card bg-base-100 shadow-2xl border border-base-300">
                        <div className="card-body items-center text-center p-8 md:p-10">
                            <div className="badge badge-error badge-outline mb-4">Something went wrong</div>

                            <h1 className="text-7xl md:text-9xl font-black tracking-tight text-error">
                                404
                            </h1>

                            <p className="text-lg md:text-2xl font-semibold text-base-content mt-2">
                                Lost in the digital hallway
                            </p>

                            <p className="max-w-md text-base-content/70 mt-2 text-xl">
                                The page you’re looking for doesn’t exist, was moved, or is having a dramatic little moment.
                            </p>

                            <div className="mt-6 flex flex-col sm:flex-row gap-3 w-full sm:w-auto">
                                <button
                                    className="btn btn-primary"
                                    onClick={() => (window.location.href = '/')}
                                >
                                    Go Home
                                </button>

                                <button
                                    className="btn btn-outline"
                                    onClick={() => window.history.back()}
                                >
                                    Go Back
                                </button>
                            </div>
                        </div>
                    </div>
                </div>

                {/* Left side text */}
                {/* <div className="flex-1 text-center lg:text-left">
                    <div className="badge badge-soft badge-primary mb-4">Error page</div>

                    <h2 className="text-4xl md:text-6xl font-bold leading-tight">
                        This page has
                        <span className="text-primary"> vanished</span>.
                    </h2>

                    <p className="py-6 text-base md:text-lg text-base-content/70 max-w-xl mx-auto lg:mx-0">
                        Don’t worry. Your app is still alive and kicking. This screen gives users a clean, modern fallback instead of a dead end.
                    </p>

                    <div className="stats stats-vertical sm:stats-horizontal shadow bg-base-100 border border-base-300">
                        <div className="stat">
                            <div className="stat-title">Status</div>
                            <div className="stat-value text-error">404</div>
                            <div className="stat-desc">Page not found</div>
                        </div>

                        <div className="stat">
                            <div className="stat-title">Suggestion</div>
                            <div className="stat-value text-primary text-2xl">Retry</div>
                            <div className="stat-desc">Or head back home</div>
                        </div>
                    </div>
                </div> */}

            </div>
        </div>
    );
};

export default ErrorPage;