"""Hello unit test module."""

from report_generator.hello import hello


def test_hello():
    """Test the hello function."""
    assert hello() == "Hello report-generator"
