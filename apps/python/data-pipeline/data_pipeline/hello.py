"""Sample Hello World application."""

from data_access.hello import hello as data_access_hello


def hello():
    """Return a friendly greeting."""
    return f"Hello from data-pipeline, also says: {data_access_hello()}"
