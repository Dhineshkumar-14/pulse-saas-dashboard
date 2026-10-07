import { ArrowLeft, ArrowRight, Home, SearchX } from "lucide-react";
import { useNavigate } from "react-router-dom";

const NotFound = () => {
  const navigate = useNavigate();

  const handleGoBack = () => {
    if (window.history.length > 1) {
      navigate(-1);
    } else {
      navigate("/");
    }
  };

  return (
    <main
      className="
        flex
        min-h-screen
        items-center
        justify-center
        bg-background
        px-4
        py-16
        sm:px-6
      "
    >
      <div className="w-full max-w-2xl text-center">
        {/* 404 */}
        <div
          className="
            select-none
            font-heading
            text-[96px]
            font-extrabold
            leading-none
            tracking-[-0.08em]
            text-primary
            sm:text-[120px]
            lg:text-[136px]
            animate-[pulse_3s_ease-in-out_infinite]
          "
          aria-hidden="true"
        >
          404
        </div>

        {/* Icon */}
        <div
          className="
            mx-auto
            mt-3
            flex
            h-11
            w-11
            items-center
            justify-center
            rounded-full
            border
            border-border
            bg-primary-soft
            text-primary
            sm:mt-4
          "
        >
          <SearchX
            size={20}
            strokeWidth={1.8}
          />
        </div>

        {/* Content */}
        <div className="mx-auto mt-5 max-w-lg sm:mt-6">
          <p
            className="
              font-heading
              text-xs
              font-bold
              uppercase
              tracking-[0.16em]
              text-primary
            "
          >
            Error 404
          </p>

          <h1
            className="
              mt-2
              font-heading
              text-3xl
              font-extrabold
              leading-[1.1]
              tracking-[-0.035em]
              text-text-primary
              sm:text-4xl
            "
          >
            Page not found
          </h1>

          <p
            className="
              mx-auto
              mt-3
              max-w-md
              text-sm
              leading-6
              text-text-secondary
              sm:text-base
              sm:leading-7
            "
          >
            The page you're looking for doesn't exist or may have been moved.
            Let's get you back to Pulse.
          </p>
        </div>

        {/* Actions */}
        <div
          className="
            mt-7
            flex
            flex-col
            items-stretch
            justify-center
            gap-3
            sm:mt-8
            sm:flex-row
            sm:items-center
          "
        >
          <button
            type="button"
            onClick={() => navigate("/")}
            className="
              group
              inline-flex
              h-11
              items-center
              justify-center
              gap-2
              rounded-[var(--pulse-radius-md)]
              bg-primary
              px-5
              text-sm
              font-semibold
              leading-none
              text-primary-foreground
              shadow-primary
              transition-all
              duration-[var(--pulse-transition-normal)]
              hover:-translate-y-0.5
              hover:bg-primary-hover
              sm:min-w-[155px]
            "
          >
            <Home size={15} strokeWidth={2} />

            <span>Back to home</span>

            <ArrowRight
              size={15}
              strokeWidth={2}
              className="
                transition-transform
                duration-[var(--pulse-transition-fast)]
                group-hover:translate-x-0.5
              "
            />
          </button>

          <button
            type="button"
            onClick={handleGoBack}
            className="
              inline-flex
              h-11
              items-center
              justify-center
              gap-2
              rounded-[var(--pulse-radius-md)]
              border
              border-border
              bg-surface
              px-5
              text-sm
              font-semibold
              leading-none
              text-text-primary
              transition-all
              duration-[var(--pulse-transition-normal)]
              hover:border-border-hover
              hover:bg-surface-hover
              sm:min-w-[125px]
            "
          >
            <ArrowLeft
              size={15}
              strokeWidth={2}
            />

            <span>Go back</span>
          </button>
        </div>

        {/* Footer */}
        <div
          className="
            mt-7
            flex
            items-center
            justify-center
            gap-2
            text-xs
            leading-5
            text-text-subtle
          "
        >
          <span
            className="
              h-1.5
              w-1.5
              shrink-0
              rounded-full
              bg-primary
            "
          />

          <span>Pulse</span>

          <span aria-hidden="true">·</span>

          <span>Something went off track</span>
        </div>
      </div>
    </main>
  );
};

export default NotFound;