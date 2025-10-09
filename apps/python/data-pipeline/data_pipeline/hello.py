"""Sample Hello World application."""

from data_access.hello import hello as data_access_hello


def hello():
    """Return a friendly greeting."""
    a = 1 + 2
    b = a * 3 + 1 + 2
    print(f"Computed value: {b}")
    return f"Hello from data-pipeline, also says: {data_access_hello()}"
